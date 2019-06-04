import {Viewer} from "@aurigma/design-atoms/Viewer/Viewer";
import {Product, Surface, PrintArea, SafetyLine, SurfaceContainer, MockupContainer} from "@aurigma/design-atoms/Model/Product";
import {RectangleF, PointF} from "@aurigma/design-atoms/Math";
import {ColorFactory} from "@aurigma/design-atoms/Colors";
import {assignProperties} from "@aurigma/design-atoms/Utils/Utils";
import {PlainTextItem, TextAlignment, BaseTextItem, TextVerticalAlignment, BoundedTextItem, ImageItem} from "@aurigma/design-atoms/Model/Product/Items";
import {Canvas} from "@aurigma/design-atoms/Canvas";

export class Demo2 {

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

        return window.CustomersCanvas.IframeApi.loadEditor(
            document.getElementById("product-viewer"),
            productDefinition,
            editorConfig
        )
    }

    init() {
        document.addEventListener("DOMContentLoaded", async () => {
            let editor = await this.loadIFrame();
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