import { MigrationInterface, QueryRunner } from "typeorm";

export class Inital1695267359339 implements MigrationInterface {
    name = 'Inital1695267359339'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "Roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{user}', CONSTRAINT "pk_user_id" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
