import { Aboreto } from '@next/font/google'
const aboreto = Aboreto({
    weight: "400",
    subsets: ["latin"]
})

export default function Semester({name, courses} : {name: string, courses: Array<string>}) {
  return (
    <li className='list-per-semester'>
        <div className={`semester-name ${aboreto.className}`}>{name}</div> 
        <ul>
            {courses.map((course) => <li key={course}>{course}</li>)}
        </ul>
    </li>
  )
}
