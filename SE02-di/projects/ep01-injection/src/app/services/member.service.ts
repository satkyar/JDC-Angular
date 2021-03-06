import { Injectable } from "@angular/core";

export type Role = 'Admin' | 'Editor' | 'Member'

export const ROLES: Role[] = ['Admin','Editor','Member']

export interface Member {
  readonly id: number
  readonly name: string
  readonly role: Role
  readonly phone: string
  readonly email: string
}

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  private id = 0;
  private resources: { [id: number ]: Member} = {};

  search(from: {role: Role | '', name: string}): Member[] {
    const {role, name} = from
    return Object.values(this.resources).filter(m => {
      if(role && m.role != role) {
        return false
      }
      if(name && m.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())) {
        return false
      }
      return true
    })
  }

  save(member: Member) {
    let id = member.id;
    if(id) {
      this.resources[member.id] = {...member};
    }
    else {
      id = ++this.id;
      this.resources[id] = {...member, id: id};
    }
    return id
  }

  findById(id: number) {
    return this.resources[id]
  }
}
