import Link from "next/link";
import Semester from "@/components/Semester";

export default function courses() {
  return (
    <div>
        <h1 className="blue-center">COURSES</h1>
        <Link href={"/"}>Go back Home</Link>
        <ul className="semester-list">
            <Semester name="Fall 2021" courses={['COMP 202', 'MATH 222', 'MATH 223', 'BIOL 219', 'CHEM 183']} />
            <Semester name="Winter 2022" courses={['COMP 206','COMP 250','MATH 240','BIOL 202','MATH 323']} />
            <Semester name="Fall 2022" courses={['COMP 302','COMP 251','MATH 324','BIOL 215','BIOL 306','BIOL 395']} />
            <Semester name="Winter 2023" courses={['COMP 551','COMP 421','COMP 273','COMP 322','BIOL 301']} />
        </ul>
    </div>
  )
}
