export interface Hero {
  id: number;
  name: string;
  owner:Owner;
}
// type Owner = 'DC' | 'MARVEL';
enum Owner{
  DC = 'DC',
  MARVEL = 'MARVEL'
}
const heroes:Hero[] = [
    {
      id: 1,
      name: 'Batman',
      owner: Owner.DC,
    },
    {
      id: 2,
      name: 'Spiderman',
      owner: Owner.MARVEL,
    },
    {
      id: 3,
      name: 'Superman',
      owner: Owner.DC,
    },
    {
      id: 4,
      name: 'Flash',
      owner: Owner.MARVEL,
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: Owner.DC,
    },{
      id :6,
      name:'green lanter',
      owner: Owner.MARVEL,
    }
  ];

export default heroes;