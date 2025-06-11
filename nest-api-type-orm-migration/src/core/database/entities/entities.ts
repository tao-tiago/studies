import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Age, Band, Policy, Role, Status, Zone } from './enum';
import { BaseEntity } from './base';

@Entity('User')
export class User extends BaseEntity {
  @Column()
  thumbnail: string;

  @Column()
  name: string;

  @Column()
  zone: Zone;

  @Column({ unique: true })
  register: string;

  @Column({ nullable: false })
  role: Role;

  @OneToMany(() => Employee, (employee) => employee.user)
  employees: Employee[];

  @OneToMany(() => Hypothetical, (h) => h.user)
  hypotheticals: Hypothetical[];
}

@Entity('Employee')
export class Employee extends BaseEntity {
  @Column()
  userId: string;

  @Column()
  thumbnail: string;

  @Column()
  name: string;

  @Column({ unique: true })
  register: string;

  @Column({ nullable: false })
  band: Band;

  @Column()
  position: string;

  @Column()
  entity: string;

  @Column({ nullable: false })
  status: Status;

  @Column({ nullable: false })
  policy: Policy;

  @Column()
  fromLocation: string;

  @Column({ nullable: true })
  toLocation: string;

  @Column({ type: 'timestamptz', nullable: true })
  requestedAt: Date;

  @ManyToOne(() => User, (user) => user.employees)
  @JoinColumn({ name: 'userId' })
  user: User;
}

@Entity('EmployeeLocation')
export class EmployeeLocation extends BaseEntity {
  @Column({ nullable: false })
  zone: Zone;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  state: string;
}

@Entity('Request')
export class Request extends BaseEntity {
  @Column()
  employeeId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  costEstimation: string;

  @Column({ nullable: true })
  proposal: string;

  @Column({ nullable: false })
  status: Status;

  @Column({ nullable: false })
  policy: Policy;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;
}

@Entity('Assignment')
export class Assignment extends BaseEntity {
  @Column({ nullable: true })
  positionId: string;

  @Column({ nullable: false })
  zoneTo: Zone;

  @Column()
  countryTo: string;

  @Column()
  cityTo: string;

  @Column({ nullable: true })
  stateTo: string;

  @Column()
  requestId: string;

  @ManyToOne(() => Request)
  @JoinColumn({ name: 'requestId' })
  request: Request;
}

@Entity('Dependent')
export class Dependent extends BaseEntity {
  @Column()
  accompanying: boolean;

  @Column()
  requestId: string;

  @ManyToOne(() => Request)
  @JoinColumn({ name: 'requestId' })
  request: Request;
}

@Entity('Compensation')
export class Compensation extends BaseEntity {
  @Column()
  proposalCurrent: string;

  @Column()
  proposalHome: string;

  @Column({ nullable: true })
  proposalHost: string;

  @Column()
  requestId: string;

  @ManyToOne(() => Request)
  @JoinColumn({ name: 'requestId' })
  request: Request;
}

@Entity('Child')
export class Child extends BaseEntity {
  @Column()
  dependentId: string;

  @Column({ type: 'date', nullable: true })
  birthday: string;

  @Column()
  age: Age;

  @ManyToOne(() => Dependent)
  @JoinColumn({ name: 'dependentId' })
  dependent: Dependent;
}

@Entity('CompensationData')
export class CompensationData extends BaseEntity {
  @Column('float')
  salary: number;

  @Column()
  mrs: number;

  @Column()
  cr: number;

  @Column()
  bonus: number;

  @Column()
  lti: number;
}

@Entity('Hypothetical')
export class Hypothetical extends BaseEntity {
  @Column()
  userId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  costEstimation: string;

  @Column({ nullable: true })
  proposal: string;

  @Column({ type: 'timestamptz' })
  requestedAt: Date;

  @Column({ nullable: false })
  policy: Policy;

  @Column({ nullable: false })
  band: Band;

  @Column()
  fromCountry: string;

  @Column()
  toCountry: string;

  @ManyToOne(() => User, (user) => user.hypotheticals)
  @JoinColumn({ name: 'userId' })
  user: User;
}
