import { InputTextComponent, ButtonComponent, SelectComponent, CheckboxComponent, RadioComponent } from "my-lib-ui";

const InscriptionComponent: React.FC = () => {
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
                <InputTextComponent label="Nom"/>
                <InputTextComponent label="Prénom" />
                <InputTextComponent label="E-mail" />
                <InputTextComponent label="Numéro de téléphone" />
                <SelectComponent label="Nationalité" >
                    <option value="france">France</option>
                </SelectComponent>
            </div>
            <CheckboxComponent label="j'atteste que je possède un permis de conduite valide." type="checkbox" />
            <ButtonComponent label="Demander mon inscription"/>
        </div>
    </div>
);
};

export default InscriptionComponent;
