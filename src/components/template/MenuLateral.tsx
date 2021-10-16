import { IconeAjustes, IconeInicio } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return (
        <aside>
            <ul>
                <MenuItem url="/" texto="Inicio" icone={IconeInicio}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
            </ul>
        </aside>
    )
}