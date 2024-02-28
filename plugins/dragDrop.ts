export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('drag-drop', {
        mounted(el) {
            el.setAttribute('draggable-id', Math.random().toString(36).substring(7));
            el.addEventListener('dragstart', dragStart, false);
            document.body.addEventListener('dragover', dragOver, false);
            document.body.addEventListener('drop', drop, false);
        },
        unmounted(el) {
            document.body.removeEventListener('dragover', dragOver);
            document.body.removeEventListener('drop', drop);
        }
    })
})

function dragStart(event: DragEvent) {
    if (event.target instanceof HTMLElement) {
        const draggableId = event.target.getAttribute('draggable-id');
        if (draggableId) {
            event.dataTransfer?.setData("text/plain", draggableId);
        }
    }
}


function dragOver(event: DragEvent) {
    event.preventDefault();
}

function drop(event: DragEvent) {
    const draggableId = event.dataTransfer?.getData("text/plain");
    if (draggableId) {
        const draggedElement = document.querySelector(`[draggable-id="${draggableId}"]`);
        if (draggedElement instanceof HTMLElement) {
            draggedElement.style.left = `${event.clientX}px`;
            draggedElement.style.top = `${event.clientY}px`;
        }
    }
    event.preventDefault();
}