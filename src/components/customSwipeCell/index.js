import { SwipeCell } from 'vant'

const THRESHOLD = 0.5; // 50%才算滑動

// SwipeCell 有 bug，需覆寫
export default {
    mixins: [SwipeCell],
    methods: {
        resetSwipeStatus() {
            SwipeCell.methods.resetSwipeStatus.call(this)
            this.$emit('open', this);
        },
        startDrag(event) {
            SwipeCell.methods.startDrag.call(this, event)
            this.$emit('startDrag', event);
        },
        onDrag(event) {
            SwipeCell.methods.onDrag.call(this, event)
            this.$emit('onDrag', event);
        },
        endDrag() {
            SwipeCell.methods.endDrag.call(this)
            this.$emit('endDrag');
        },
        swipeLeaveTransition(direction) {
            const offset = this.offset,
                computedLeftWidth = this.computedLeftWidth,
                computedRightWidth = this.computedRightWidth;
            const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

            if (direction === 'right' && -offset > computedRightWidth * threshold && computedRightWidth > 0) {
                this.open('right'); // left
            } else if (direction === 'left' && offset > computedLeftWidth * threshold && computedLeftWidth > 0) {
                this.open('left'); // reset
            } else {
                this.swipeMove(0);
            }
        },
    },
}