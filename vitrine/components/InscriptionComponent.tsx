import { InputTextComponent, ButtonComponent, SelectComponent, CheckboxComponent, RadioComponent } from "my-lib-ui";
import {useRouter} from "next/router";
import React, {useState} from "react";
import axios from "axios";


const InscriptionComponent: React.FC = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

    const inscription = () => {
        fetch("/inscription", {
            body: JSON.stringify({email, firstName, lastName, phone})
        }).then(response => response.json()).then((data) => {
            console.log(data);
            router.push("/");
        })
    }
    const login = () => {
        axios
            .post(
                "http://localhost:8000/api/.user/inscription",
                {
                    lastName: email,
                    firstName: firstName,
                    email: lastName,
                    phone: phone,
                    country: country,
                }
            ).then((res) => {
            router.push("/");
            setMessage("Votre inscription a été effectuée avec succès");
        })
    }
return (
    <div className="inscription-component">
        <div className="message">{message}</div>
        <div className="bloc-inscription">
                <h1>Inscription</h1>
                <p>Je suis :</p> <br />
                <div className="form-select">
                    <RadioComponent label="une entreprise" type="radio" name="type" />
                    <RadioComponent label="un particulier" type="radio" name="type" />
                </div>
                <div className="grid-form">
                    <InputTextComponent name="lastname" label="Nom" onChange={e => setLastName(e.target.value)}/>
                    <InputTextComponent name="firstname" label="Prénom" onChange={e => setFirstName(e.target.value)}/>
                    <InputTextComponent name="email" label="E-mail" onChange={e => setEmail(e.target.value)}/>
                    <InputTextComponent name="phoneNumber" label="Numéro de téléphone" onChange={e => setPhone(e.target.value)}/>
                    <SelectComponent name="nationality" label="Nationalité" onChange={e => setCountry(e.target.value)} >
                        <option value="france">France</option>
                    </SelectComponent>
                </div>
                <CheckboxComponent label="j'atteste que je possède un permis de conduite valide." type="checkbox" />
                <ButtonComponent label="Demander mon inscription" onClick={login} />
        </div>
    </div>
);
};

export default InscriptionComponent;
