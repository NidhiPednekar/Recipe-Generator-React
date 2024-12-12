import logo from "../public/chef_logo.png"

export default function Header(){
    return (
        <main>
        <header>
            <img src={logo}  height= "60px"alt="" />
            <h1>1 Minute Recipe</h1>
        </header>
        </main>
    )
}