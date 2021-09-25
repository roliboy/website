<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	interface Point {
		x: number;
		y: number;
	}

	interface Shape {
		_scale: number;
		_shape: string;

		size: number;
		position: Point;
		velocity: Point;
		rotation: number;
		rotationVelocity: number;
		color: string;
		path: Path2D;
	}

	const makeTrianglePath = (size: number): string => {
		const height = (3 ** 0.5 / 2) * size;
		return `M 0 ${(-2 / 3) * height} L ${-size / 2} ${(1 / 3) * height} h ${size} Z`;
	};

	// TODO: rounded triangle

	const makeSquarePath = (size: number): string => {
		return `M ${-size / 2} ${-size / 2} v ${size} h ${size} v ${-size} Z`;
	};

	const makeRoundedSquarePath = (size: number): string => {
		const r = size / 4;
		const w = size - 2 * r;
		// TODO: figure out why the starting y position needs -r
		return `M ${-w / 2} ${-w / 2 - r}
		 		h ${w}
				a ${r} ${r} 0 0 1 ${r} ${r}
				v ${w}
				a ${r} ${r} 0 0 1 ${-r} ${r}
				h ${-w}
				a ${r} ${r} 0 0 1 ${-r} ${-r}
				v ${-w}
				a ${r} ${r} 0 0 1 ${r} ${-r}
				z`;
	};

	const choice = <T extends unknown>(array: Array<T>): T =>
		array.at(Math.floor(Math.random() * array.length));

	const map = (n: number, start1: number, stop1: number, start2: number, stop2: number): number =>
		((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;

	const clamp = (n: number, start: number, end: number): number =>
		n < start ? start : n > end ? end : n;

	const makeShape = (width: number, height: number): Shape => {
		const _scale = choice([0.03, 0.025, 0.02]);
		const _shape = choice(['triangle', 'square']);

		const size = _scale * Math.max(width, height);
		const path = new Path2D(
			_shape === 'triangle' ? makeTrianglePath(size) : makeRoundedSquarePath(size)
		);
		const position = { x: width * Math.random(), y: height * Math.random() };
		const velocity = {
			x: (Math.random() - 0.5) * size * 0.004,
			y: (Math.random() - 0.5) * size * 0.004
		};
		const rotation = Math.random() * Math.PI;
		const rotationVelocity = ((Math.random() - 0.5) * Math.PI) / 360;
		const color = Math.random() < 0.25 ? '#ff79c6' : '#bd93f9';
		return { _scale, _shape, size, path, position, velocity, rotation, rotationVelocity, color };
	};

	const updateShape = (
		shape: Shape,
		oldWidth: number,
		oldHeight: number,
		width: number,
		height: number
	): Shape => {
		shape.position.x *= width / oldWidth;
		shape.position.y *= height / oldHeight;
		shape.size = shape._scale * Math.max(width, height);
		shape.path = new Path2D(
			shape._shape === 'triangle' ? makeTrianglePath(shape.size) : makeRoundedSquarePath(shape.size)
		);

		return shape;
	};

	onMount(() => {
		const context = canvas.getContext('2d');

		canvas.width = canvas.getBoundingClientRect().width;
		canvas.height = canvas.getBoundingClientRect().height;

		let shapes: Array<Shape> = Array(Math.floor(map(canvas.width, 360, 1920, 16, 32)))
			.fill(null)
			.map((_) => makeShape(canvas.width, canvas.height));

		let animationFrameId: number;
		const drawFrame = () => {
			if (
				canvas.getBoundingClientRect().width != canvas.width ||
				canvas.getBoundingClientRect().height != canvas.height
			) {
				const newWidth = canvas.getBoundingClientRect().width;
				const newHeight = canvas.getBoundingClientRect().height;

				shapes.map((shape) => updateShape(shape, canvas.width, canvas.height, newWidth, newHeight));

				canvas.width = newWidth;
				canvas.height = newHeight;
			}

			context.clearRect(0, 0, canvas.width, canvas.height);

			shapes.forEach((shape) => {
				shape.position.x += shape.velocity.x;
				shape.position.y += shape.velocity.y;
				shape.rotation += shape.rotationVelocity;
				if (shape.position.x < -shape.size) shape.position.x = canvas.width + shape.size;
				if (shape.position.x > canvas.width + shape.size) shape.position.x = -shape.size;
				if (shape.position.y < -shape.size) shape.position.y = canvas.height + shape.size;
				if (shape.position.y > canvas.height + shape.size) shape.position.y = -shape.size;
			});

			shapes.forEach((shape) => {
				context.save();
				context.translate(shape.position.x, shape.position.y);
				context.rotate(shape.rotation);
				context.strokeStyle = shape.color;
				context.lineWidth = 2;
				context.globalAlpha = clamp(
					map(shape.position.y, 0, canvas.height - shape.size, 1, 0),
					0,
					1
				);

				context.stroke(shape.path);
				context.restore();
			});

			animationFrameId = requestAnimationFrame(drawFrame);
		};

		animationFrameId = requestAnimationFrame(drawFrame);

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<canvas bind:this={canvas} class="w-full h-full absolute top-0 left-0" />
