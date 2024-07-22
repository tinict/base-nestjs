import {
    RecStatus
} from "src/constants";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

/**
 * Base system Entity
 * - id
 * - description
 * - rec_status
 * - created_by
 * - deleted_by
 * - deleted_at
 * - created_at
 * - updated_by
 * - updated_at
 * - display_order
 * - code
 */
export abstract class CommonEntity extends BaseEntity {
    /**
     * id
     */
    @PrimaryGeneratedColumn('uuid', {
        name: 'id',
    })
    Id: string;

    /**
     * Created By
     */
    @Column({
        name: 'description',
        type: 'longtext',
        nullable: true
    })
    public Description: string;

    /**
     * Created By
     */
    @Column({
        name: 'created_by',
        type: 'char',
        length: 64,
        nullable: true
    })
    public CreatedBy: string;


    /**
     * Created At
     */
    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        nullable: true,
    })
    public CreatedAt: Date;

    /**
     * Deleted By
     */
    @Column({
        name: 'deleted_by',
        type: 'char',
        length: 64,
        nullable: true
    })
    public DeletedBy: string;

    /**
     * Updated By
     */
    @Column({
        name: 'updated_by',
        type: 'char',
        length: 64,
        nullable: true
    })
    public UpdatedBy: string;

    /**
     * Updated At
     */
    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        nullable: true,
    })
    public UpdatedAt: Date;

    /**
     * Record Status
     */
    @Column({
        type: 'enum',
        enum: RecStatus,
        name: 'rec_status',
        default: RecStatus.ACTIVE,
    })
    public RecStatus: RecStatus;

    /**
     * Deleted At
     */
    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    public DeletedAt: Date;

    /**
     * Display Order
     */
    @Column({
        name: 'display_order',
        type: 'decimal',
        nullable: true,
    })
    public DisplayOrder: number;

    /**
     * Code
     */
    @Column({
        name: 'code',
        type: 'char',
        length: 64,
        nullable: true
    })
    public Code: string;
};
