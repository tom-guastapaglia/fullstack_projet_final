import { InputTextComponent, ButtonComponent, SelectComponent, CheckboxComponent, RadioComponent } from "my-lib-ui";
import {useRouter} from "next/router";
import {useState} from "react";

const InscriptionComponent: React.FC = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const inscription = () => {
        fetch("/inscription", {
            body: JSON.stringify({email, firstName, lastName, phone})
        }).then(response => response.json()).then((data) => {
            console.log(data);
            router.push("/");
        })
    }
return (
    <div className="inscription-component">
        <div className="bloc-inscription">
            <h1>Inscription</h1>
            <p>Je suis :</p> <br />
            <div className="form-select">
                <RadioComponent label="une entreprise" type="radio" name="type" />
                <RadioComponent label="un particulier" type="radio" name="type" />
            </div>
            <div className="grid-form">
                <InputTextComponent label="Nom" onChange={e => setLastName(e.target.value)}/>
                <InputTextComponent label="Prénom" onChange={e => setFirstName(e.target.value)}/>
                <InputTextComponent label="E-mail" onChange={e => setEmail(e.target.value)}/>
                <InputTextComponent label="Numéro de téléphone" onChange={e => setPhone(e.target.value)}/>
                <SelectComponent label="Nationalité" >
                    <option value="france">France</option>
                </SelectComponent>
            </div>
            <CheckboxComponent label="j'atteste que je possède un permis de conduite valide." type="checkbox" />
            <ButtonComponent label="Demander mon inscription" onClick={inscription}/>
        </div>
    </div>
);
};

export default InscriptionComponent;
