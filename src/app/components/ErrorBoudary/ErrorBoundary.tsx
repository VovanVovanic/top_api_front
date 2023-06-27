"use client"
export default function ErrorBoundary({ error }: { error: Error }) {
 console.log({...error})
 return (
  <>
   <div>Something gonna wrong ...</div>
   <div>{JSON.stringify(error)}</div>
  </>
 )
}