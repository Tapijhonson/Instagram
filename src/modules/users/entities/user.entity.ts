 import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
 import { Post } from "../../posts/entities/post.entity";
 import { Comment } from "../../comments/entities/comment.entity";

 @Entity("users")
 export class User {

 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 name: string;

 @Column({ unique: true })
 email: string;

 @Column()
 bio: string;

 @Column({default: 0})
 followers_count: number;

 @Column({default: 0})
 following_count: number;

 @Column()
 password_hash: string;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 update_at: Date;

 @DeleteDateColumn()
 deleted_at: Date;

// Relações
@OneToMany(() => Post, (post) => post.user )
posts: Post[];

@OneToMany(() => Comment, (comments) => comments.user )
comments: Comment[];




 }