import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1749694213077 implements MigrationInterface {
    name = 'Migrations1749694213077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "thumbnail" character varying NOT NULL, "name" character varying NOT NULL, "zone" integer NOT NULL, "register" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "UQ_28302a9f388959aafa2cf4b0461" UNIQUE ("register"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" uuid NOT NULL, "thumbnail" character varying NOT NULL, "name" character varying NOT NULL, "register" character varying NOT NULL, "band" integer NOT NULL, "position" character varying NOT NULL, "entity" character varying NOT NULL, "status" character varying NOT NULL, "policy" integer NOT NULL, "fromLocation" character varying NOT NULL, "toLocation" character varying, "requestedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_05d4f64d9954e9e071649098a01" UNIQUE ("register"), CONSTRAINT "PK_9a993c20751b9867abc60108433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "EmployeeLocation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "zone" integer NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying, CONSTRAINT "PK_4c3fcb3869bba5af2f18c2a2b84" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Request" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "employeeId" uuid NOT NULL, "title" character varying NOT NULL, "costEstimation" character varying, "proposal" character varying, "status" character varying NOT NULL, "policy" integer NOT NULL, CONSTRAINT "PK_23de24dc477765bcc099feae8e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Assignment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "positionId" character varying, "zoneTo" integer NOT NULL, "countryTo" character varying NOT NULL, "cityTo" character varying NOT NULL, "stateTo" character varying, "requestId" uuid NOT NULL, CONSTRAINT "PK_524522c6703b10209ab8138884c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Dependent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "accompanying" boolean NOT NULL, "requestId" uuid NOT NULL, CONSTRAINT "PK_5ce2a41ab4c55bac9a7fdf53c63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Compensation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "proposalCurrent" character varying NOT NULL, "proposalHome" character varying NOT NULL, "proposalHost" character varying, "requestId" uuid NOT NULL, CONSTRAINT "PK_994c7fc56d96394d3752351ff93" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Child" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "dependentId" uuid NOT NULL, "birthday" date, "age" integer NOT NULL, CONSTRAINT "PK_27d9c4a01408eac9da1017a0f4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "CompensationData" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "salary" double precision NOT NULL, "mrs" integer NOT NULL, "cr" integer NOT NULL, "bonus" integer NOT NULL, "lti" integer NOT NULL, CONSTRAINT "PK_3d47fb7c6c7ffea3f297b9833b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Hypothetical" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" uuid NOT NULL, "title" character varying NOT NULL, "costEstimation" character varying, "proposal" character varying, "requestedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "policy" integer NOT NULL, "band" integer NOT NULL, "fromCountry" character varying NOT NULL, "toCountry" character varying NOT NULL, CONSTRAINT "PK_2ec520a0b4f9a860f9d00f07cde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Employee" ADD CONSTRAINT "FK_c1ec0cb63387d4c8bb2892bc002" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Request" ADD CONSTRAINT "FK_00733b0204241f83b7919599d14" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Assignment" ADD CONSTRAINT "FK_5164137a79b29ea6908a31a9cbc" FOREIGN KEY ("requestId") REFERENCES "Request"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Dependent" ADD CONSTRAINT "FK_2404d60de9707f0e9fc75eb7052" FOREIGN KEY ("requestId") REFERENCES "Request"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Compensation" ADD CONSTRAINT "FK_2a35e9687571e8e155d5b8bad9b" FOREIGN KEY ("requestId") REFERENCES "Request"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Child" ADD CONSTRAINT "FK_4060e447cdfcbe3c69d2e0d865c" FOREIGN KEY ("dependentId") REFERENCES "Dependent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Hypothetical" ADD CONSTRAINT "FK_79e184a9ba1a198bdb96aa63b30" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Hypothetical" DROP CONSTRAINT "FK_79e184a9ba1a198bdb96aa63b30"`);
        await queryRunner.query(`ALTER TABLE "Child" DROP CONSTRAINT "FK_4060e447cdfcbe3c69d2e0d865c"`);
        await queryRunner.query(`ALTER TABLE "Compensation" DROP CONSTRAINT "FK_2a35e9687571e8e155d5b8bad9b"`);
        await queryRunner.query(`ALTER TABLE "Dependent" DROP CONSTRAINT "FK_2404d60de9707f0e9fc75eb7052"`);
        await queryRunner.query(`ALTER TABLE "Assignment" DROP CONSTRAINT "FK_5164137a79b29ea6908a31a9cbc"`);
        await queryRunner.query(`ALTER TABLE "Request" DROP CONSTRAINT "FK_00733b0204241f83b7919599d14"`);
        await queryRunner.query(`ALTER TABLE "Employee" DROP CONSTRAINT "FK_c1ec0cb63387d4c8bb2892bc002"`);
        await queryRunner.query(`DROP TABLE "Hypothetical"`);
        await queryRunner.query(`DROP TABLE "CompensationData"`);
        await queryRunner.query(`DROP TABLE "Child"`);
        await queryRunner.query(`DROP TABLE "Compensation"`);
        await queryRunner.query(`DROP TABLE "Dependent"`);
        await queryRunner.query(`DROP TABLE "Assignment"`);
        await queryRunner.query(`DROP TABLE "Request"`);
        await queryRunner.query(`DROP TABLE "EmployeeLocation"`);
        await queryRunner.query(`DROP TABLE "Employee"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
