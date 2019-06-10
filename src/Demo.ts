// import {Viewer} from "@aurigma/design-atoms/Viewer/Viewer";
// import {Product, Surface, PrintArea, SafetyLine, SurfaceContainer, MockupContainer} from "@aurigma/design-atoms/Model/Product";
const { RectangleF } = require('@aurigma/design-atoms/Math');
// import {RectangleF, PointF} from "@aurigma/design-atoms/Math";
// import {ColorFactory} from "@aurigma/design-atoms/Colors";
// import {assignProperties} from "@aurigma/design-atoms/Utils/Utils";
// import {PlainTextItem, TextAlignment, BaseTextItem, TextVerticalAlignment, BoundedTextItem, ImageItem} from "@aurigma/design-atoms/Model/Product/Items";
// import {Canvas} from "@aurigma/design-atoms/Canvas";

declare global {
    interface Window { CustomersCanvas: any; }
}

window.CustomersCanvas = window.CustomersCanvas || {};


export class Demo2 {

    private product: any;
    private selectedItem : any;

    loadIFrame() {
        let productDefinition = {
            surfaces: [
                'basicinvite/Confetti_Dots_Storybook-1/Confetti_Dots_Storybook-1',
                'basicinvite/Confetti_Dots_Storybook-2/Confetti_Dots_Storybook-2',
                'basicinvite/Confetti_Dots_Storybook-3/Confetti_Dots_Storybook-3',
                'basicinvite/Confetti_Dots_Storybook-4/Confetti_Dots_Storybook-4',
                'basicinvite/Confetti_Dots_Storybook-5/Confetti_Dots_Storybook-5',
                'basicinvite/Confetti_Dots_Storybook-6/Confetti_Dots_Storybook-6',

            ],
        };
        let editorConfig = {
            initialMode: 'Advanced',
            canvas: {
                rulers: {
                    enabled: false,
                }
            },

            "violationWarningsSettings": {
                "textCropViolationWarningEnabled": false,
                "safetyLineViolationWarningEnabled": false,
            }
        };
        const cc = window.CustomersCanvas;

        return window.CustomersCanvas.IframeApi.loadEditor(
            document.getElementById("product-viewer"),
            productDefinition,
            editorConfig
        )
    }

    moveHorizontal(left: boolean) {
        const textRect = this.selectedItem.textRectangle;
        const add = left ? -1 : 1;
        const rect = RectangleF.FromLTRB(textRect.left + add, textRect.top, textRect.right + add, textRect.bottom);
        this.selectedItem.textRectangle = rect;
        this.product.setItem(this.selectedItem);
    }

    moveVertical(up: boolean) {
        const textRect = this.selectedItem.textRectangle;
        const add = up ? -1 : 1;
        const rect = RectangleF.FromLTRB(textRect.left, textRect.top + add, textRect.right, textRect.bottom + add);
        this.selectedItem.textRectangle = rect;
        this.product.setItem(this.selectedItem);
    }

    init() {
        document.addEventListener("DOMContentLoaded", async () => {
            const cc = window.CustomersCanvas;
            let editor = await this.loadIFrame();

            this.product = await editor.getProduct();


            editor.subscribe(cc.IframeApi.PostMessage.Events.SelectedItemsChanged,
                async (args: any) => {
                    const predicate = function (item: any, myArgs: any) {
                        return item.name === myArgs.name;
                    }

                    const items = await this.product.getItems(predicate, { name: args[0]._name});
                    this.selectedItem = items[0] || {};
                }
            );

            const buttonLeft = document.getElementById('button_left') as HTMLButtonElement;
            const buttonRight = document.getElementById('button_right') as HTMLInputElement;
            const buttonUp = document.getElementById('button_up') as HTMLInputElement;
            const buttonDown = document.getElementById('button_down') as HTMLInputElement;

            buttonLeft.addEventListener('click', () => { this.moveHorizontal(true)});
            buttonRight.addEventListener('click', () => { this.moveHorizontal(false)});
            buttonUp.addEventListener('click', () => { this.moveVertical(true)});
            buttonDown.addEventListener('click', () => { this.moveVertical(false)});

            // let product = await editor.getProduct();
            // let model = await product.getProductModel();
            // document.getElementById('changeColor').addEventListener('click', async () =>{
            //     let items = await product.getItems((item: any, args: any) => item.name, {name: 'text-'});
            //     console.log('items to change', items)
            //     for (let item of items) {
            //         if (item.color) {
            //             console.log('before color', item.color);
            //             let c =  ColorFactory.createColor('#ff0000');
            //             item.color = c;
            //             console.log('after color', c);

            //         }
            //         if (item.fillColor) {
            //             item.fillColor = ColorFactory.createColor('#ff0000');
            //         }
            //         await product.setItem(item);
            //     }
            // });
        });
    }
}

(new Demo2()).init();