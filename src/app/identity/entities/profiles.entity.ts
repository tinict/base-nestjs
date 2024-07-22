import {
    Entity,
    Column,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { UserEntity } from './iam/users.entity';
import { Gender } from '../constants/enum';
import { CommonEntity } from 'src/entities';

/**
 * Table: tbl_profiles
 */
@Entity({ name: 'tbl_profiles' })
export class ProfileEntity extends CommonEntity {
    /**
     * firtname
     */
    @Column({
        name: 'firtname',
        type: 'nvarchar',
        length: 35,
    })
    FirtName: string;

    /**
     * lastname
     */
    @Column({
        name: 'lastname',
        type: 'nvarchar',
        length: 50,
    })
    LastName: string;

    /**
     * email
     */
    @Column({
        name: 'email',
        type: 'varchar',
        length: 320,
    })
    Email: string;

    /**
     * phone
     */
    @Column({
        name: 'phone',
        type: 'varchar',
        length: 15,
    })
    Phone: string;

    /**
     * url_picture
     */
    @Column({
        name: 'url_picture',
        type: 'varchar',
        length: 320,
    })
    UrlPicture: string;

    /**
     * gender
     */
    @Column({
        name: 'gender',
        type: 'enum',
        enum: Gender,
    })
    Gender: Gender;

    /**
     * Date Of Birth
     */
    @Column({
        name: 'dob',
        type: 'datetime',
    })
    Dob: Date;

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    User: UserEntity;
};
