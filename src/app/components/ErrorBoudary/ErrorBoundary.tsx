"use client"
export default function ErrorBoundary({ error }: { error: Error }) {
 return (
  <>
   <div>Something gonna wrong ...</div>
   <div>{JSON.stringify(error)}</div>
  </>
 )
}