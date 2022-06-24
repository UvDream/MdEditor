import mitt from "mitt"

export const emitter = mitt()

export enum EventType {
    Scroll = 'scroll',
    EditorShow = 'editor-show',
}
