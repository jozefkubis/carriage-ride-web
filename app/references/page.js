import ReferenceList from "../_components/ReferenceList"
import { getReferences } from "../_lib/data-service"

export default async function Page() {

  const references = await getReferences()
  console.log(references);


  return <ReferenceList references={references} />
}
