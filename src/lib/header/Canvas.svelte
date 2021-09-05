<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	interface Point {
		x: number;
		y: number;
	}

	interface Shape {
		position: Point;
		velocity: Point;
		rotation: number;
		rotationVelocity: number;
		color: string;
		size: number;
		path: Path2D;
	}

	const makeTrianglePath = (size: number): string => {
		const height = (3 ** 0.5 / 2) * size;
		return `M 0 ${(-2 / 3) * height} L ${-size / 2} ${(1 / 3) * height} h ${size} Z`;
	};

	const makeSquarePath = (size: number): string => {
		return `M ${-size / 2} ${-size / 2} v ${size} h ${size} v ${-size} Z`;
	};

	const makeShape = (): Shape => {
		const shape = Math.random() < 0.5 ? 'triangle' : 'square';
		const size = 25 * Math.random() + 25;
		const xposition = window.innerWidth * Math.random();
		const yposition = window.innerHeight * Math.random();
		const xvelocity = (Math.random() - 0.5) * 0.25;
		const yvelocity = (Math.random() - 0.5) * 0.25;

		return {
			size: size,
			path: new Path2D(shape == 'triangle' ? makeTrianglePath(size) : makeSquarePath(size)),
			position: { x: xposition, y: yposition },
			velocity: { x: xvelocity, y: yvelocity },
			rotation: Math.random() * Math.PI,
			rotationVelocity: (Math.random() - 0.5) * 0.0125,
			color: Math.random() < 0.25 ? '#ff79c6' : '#bd93f9'
		};
	};

	onMount(() => {
		let shapes: Array<Shape> = Array(32)
			.fill(null)
			.map((shape) => makeShape());

		// TODO: update when window resized
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const context = canvas.getContext('2d');
		context.lineWidth = 2;
		context.strokeStyle = '#ffffff';

		let animationFrameId: number;
		const drawFrame = () => {
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
				// TODO: map
				context.globalAlpha =
					(canvas.height - shape.position.y + shape.size) / (canvas.height + shape.size);
				context.stroke(shape.path);
				context.restore();
			});

			animationFrameId = requestAnimationFrame(drawFrame);
		};

		animationFrameId = requestAnimationFrame(drawFrame);

		return () => {
			console.log('unmounted');
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<canvas bind:this={canvas} class="w-full h-full absolute top-0 left-0" />
