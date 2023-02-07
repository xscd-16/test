import { defineComponent } from 'vue';
import injectTool from '../../utils/injectTool';

export default defineComponent({
    setup(){
        let {TOOL_toast, TOOL_loading, TOOL_httpClient, TOOL_TEXT} = injectTool();
        

        return { 
            
        };
    }
});