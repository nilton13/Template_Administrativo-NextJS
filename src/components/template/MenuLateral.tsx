import useAuth from "../../data/hook/useAuth";
import { IconeAjustes, IconeInicio, IconeLogout } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral(){

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            dark:bg-gray-900 s
        `}>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeInicio}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
            </ul>
            <ul>
                <MenuItem  texto="Sair" icone={IconeLogout}
                    onClick={logout}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}