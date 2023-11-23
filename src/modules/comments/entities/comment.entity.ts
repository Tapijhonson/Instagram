import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { Post } from "../../posts/entities/post.entity";
import { User } from "../../users/entities/user.entity";

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    post_id: number;

    @Column()
    user_id: number;

    @CreateDateColumn()
    created_at: Date;
   
    @UpdateDateColumn()
    update_at: Date;
   
    @DeleteDateColumn()
    deleted_at: Date;


    // Relações
    @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({ name: "post_id" })
    post: Post;

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn({ name: "user_id" })
    user: User

}