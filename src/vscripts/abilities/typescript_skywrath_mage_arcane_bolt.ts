import { BaseAbility, registerAbility } from "../lib/dota_ts_adapter";

@registerAbility()
export class typescript_skywrath_mage_arcane_bolt extends BaseAbility{
    sound_cast :string ="Hero_SkywrathMage.ArcaneBolt.Cast";
    sound_impact:string ="Hero_SkywrathMage.ArcaneBolt.Impact";
    projectile_arcane_bolt: string = "particles/units/heroes/hero_skywrath_mage/skywrath_mage_arcane_bolt.vpcf";

    OnSpellStart(): void {
        const target =this.GetCursorTarget();

        
    }

}