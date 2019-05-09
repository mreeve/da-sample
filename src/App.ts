import { Logger } from "./Logger.js";
import { RgbColor } from "@aurigma/design-atoms/Colors";

export class App {
    start() {
        console.log('color', new RgbColor("#cccccc"));
        const logger = new Logger();
        (async function() {
            let productDefinition = {
                surfaces: [{
                    printAreas: [{
                        designFile: "1_Elegant_Vintage_Wedding_Invitation_Portrait_Front"
                    }],
                }]
            };
            let editorConfig = {
                initialMode: 'Advanced',
                canvasOnlyMode: true,
                canvas: {
                    rulers: {
                        enabled: false,
                    }
                }
            };
            
            (<any>window)['CustomersCanvas'].IframeApi.loadEditor(
                document.getElementById("product-viewer"),
                productDefinition,
                editorConfig
            ).then((editor:any) =>{
                editor.getProduct();
                logger.log(editor);
                let c = new RgbColor('#CCCCCC');

            });
        })()
    }
}