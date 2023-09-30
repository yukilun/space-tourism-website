import { ref, onUnmounted } from 'vue';

export default function useSwipe(target, options = {threshold: 10}) {
    const pointerStartX = ref(0);
    const pointerStartY = ref(0);
    const pointerEndX = ref(0);
    const pointerEndY = ref(0);
    const isTouchScreen = ref(false);

    let swipeLeft = null;
    let swipeRight = null;
    let swipeUp = null;
    let swipeDown = null;

    function handlePointerDown(e) {
        if(e.type == 'mousedown') {
            pointerStartX.value = e.clientX;
            pointerStartY.value = e.clientY;
        }
        else {
            isTouchScreen.value = true;
            pointerStartX.value = e.touches[0].clientX;
            pointerStartY.value = e.touches[0].clientY;
        }
    }

    function handlePointerMove(e) {
        if(e.type == 'touchmove') {
            pointerEndX.value = e.touches[0].clientX;
            pointerEndY.value = e.touches[0].clientY;
        }
    }

    function handlePointerUp(e) {
        if(e.type == 'mouseup') {
            pointerEndX.value = e.clientX;
            pointerEndY.value = e.clientY;
        }
        handleGesture();
    }

    function handleGesture() {
        const netX = Math.abs(pointerEndX.value - pointerStartX.value);
        const netY = Math.abs(pointerEndY.value - pointerStartY.value);
        if(netX > netY && netX > options.threshold) {
            // swipe left or right
            if(pointerEndX.value > pointerStartX.value) {
                if(swipeRight) swipeRight();
            }
            else {
                if(swipeLeft) swipeLeft();
            }
        }
        else if(netY > netX && netY > options.threshold) {
            // swipe up or down
            if(pointerEndY.value > pointerStartY.value) {
                if(swipeDown) swipeDown();
            }
            else {
                if(swipeUp) swipeUp();
            }
        }
    }

    target.addEventListener('mousedown', handlePointerDown, { passive: true });
    target.addEventListener('mouseup', handlePointerUp, { passive: true });
    target.addEventListener('touchstart', handlePointerDown, { passive: true });
    target.addEventListener('touchmove', handlePointerMove, { passive: true });
    target.addEventListener('touchend', handlePointerUp, { passive: true });

    onUnmounted(()=> {
        target.removeEventListener('mousedown', handlePointerDown);
        target.removeEventListener('mouseup', handlePointerUp);
        target.removeEventListener('touchstart', handlePointerDown);
        target.removeEventListener('touchmove', handlePointerMove);
        target.removeEventListener('touchend', handlePointerUp);
    })

    return {
        isTouchScreen: isTouchScreen,
        onSwipeLeft: (callback) => swipeLeft = callback,
        onSwipeRight: (callback) => swipeRight = callback,
        onSwipeUp: (callback) => swipeUp = callback,
        onSwipeDown: (callback) => swipeDown = callback
    }
}