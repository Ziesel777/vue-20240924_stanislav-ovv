import { defineComponent } from 'vue';
import { UiButton } from '@shgk/vue-course-ui';
import './UiCounter.css';

export default defineComponent({
	name: 'UiCounter',
	components: {
		UiButton,
	},
	props: {
		count: Number,
		min: {
			type: Number,
			default: 0,
		},
		max: {
			type: Number,
			default: Infinity,
		},
	},
	emits: ['update:count'],
	setup(props, { emit }) {
		function decrement(){
			const { count, min } = props;
			if(count < min) return;

			emit('update:count', count-1);
		}
		function increment(){
			const { count, max } = props;
			if(count > max) return;

			emit('update:count', count+1);
		}

		return { decrement, increment };
	},
	template: `
		<div class="counter">
			<UiButton aria-label="Decrement"
				:disabled="count <= min"
				@click="decrement" >➖</UiButton>
			<span class="count" data-testid="count">{{ count }}</span>
			<UiButton aria-label="Increment"
				:disabled="count >= max"
				@click="increment" >➕</UiButton>
		</div>
	`,
})
