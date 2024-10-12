/**
 * This file is a part of Scrap, an educational programming language.
 * You should have received a copy of the MIT License, if not, please 
 * visit https://opensource.org/licenses/MIT. To verify the code, visit
 * the official repository at https://github.com/tomas-wrobel/scrap. 
 * 
 * @license MIT
 * @author Tomáš Wróbel
 * @fileoverview Renderers
 */
import * as Blockly from "blockly";

class ScrapRenderer extends Blockly.zelos.Renderer {
    protected override makeConstants_() {
        return new class extends Blockly.zelos.ConstantProvider {
            shapeFor(connection: Blockly.RenderedConnection) {
                const check = connection.getCheck();

                if (check?.some(a => a === "boolean" || a === "type")) {
                    return this.HEXAGONAL!;
                }

                return super.shapeFor(connection);
            }
        };
    }
}

class SpritePanelRenderer extends Blockly.zelos.Renderer {
	protected override makeConstants_() {
		return new class extends Blockly.zelos.ConstantProvider {
			FIELD_CHECKBOX_X_OFFSET = 9;
		};
	}
}

Blockly.blockRendering.register("scrap", ScrapRenderer);
Blockly.blockRendering.register("spritePanel", SpritePanelRenderer);