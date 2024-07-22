import { CommonEntity } from "src/entities";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { PolicyEntity } from "./policies.entity";
import { UserEntity } from "../users.entity";

/**
 * Table: User Policy
 */
@Entity({ name: 'tbl_user_policies' })
export class UserPolicyEntity extends CommonEntity {
    @ManyToOne(() => PolicyEntity)
    @JoinColumn({
        name: 'policy_id',
    })
    Policy: PolicyEntity;

    @ManyToOne(() => UserEntity)  
    @JoinColumn({
        name: 'user_id',
    })
    User: UserEntity;
};
