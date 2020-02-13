/// <reference types="react" />
export declare type DialogProps = {
    visible: boolean;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    hideButtons?: boolean;
    cancellable?: boolean;
    cancelText: string;
    confirmText: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    className?: string;
};
declare const Dialog: {
    ({ visible, title, description, hideButtons, cancellable, cancelText, confirmText, children, onCancel, onConfirm, className }: DialogProps): JSX.Element;
    defaultProps: {
        cancelText: string;
        confirmText: string;
    };
};
export default Dialog;
