import { IconeAjustes, IconeInicio, IconeLogout } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return (
        <aside className="flex flex-col">
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeInicio}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
            </ul>
            <ul>
                <MenuItem  texto="Sair" icone={IconeLogout}
                    onClick={() => console.log("Saindo!")}
                    className={`
                        text-red-600
                        hover:bg-red-400 hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}