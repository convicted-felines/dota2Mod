import { BaseAbility, registerAbility } from "../lib/dota_ts_adapter";
import { modifier_typescript_ancient_seal } from "../modifiers/modifier_typescript_ancient_seal";

@registerAbility()
export class typescript_skywrath_mage_arcane_seal extends BaseAbility{
    sound_cast="Hero_SkywrathMage.AncientSeal.Target";

    OnSpellStart(): void {
        const seal_duration=this.GetSpecialValueFor("seal_duartion");
        const target=this.GetCursorTarget()!;

        target.EmitSound(this.sound_cast);

        target.AddNewModifier(this.GetCaster(),this,modifier_typescript_ancient_seal.name,{duration:seal_duration});
    }
}
