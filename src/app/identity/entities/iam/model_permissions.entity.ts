import { 
    Entity,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { PermissionEntity } from "./permissions.entity";
import { CommonEntity } from 'src/entities';
import { ModelEntity } from "./models.entity";

/**
 * Table: tbl_model_permissions
 */
@Entity({ name: 'tbl_model_permissions' })
export class ModelPermissionEntity extends CommonEntity {
    @ManyToOne(() => ModelEntity)
    @JoinColumn({
        name: 'model_id',
    })
    Model: ModelEntity;

    @ManyToOne(() => PermissionEntity)
    @JoinColumn({
        name: 'permission_id',
    })
    Permission: PermissionEntity;
};
