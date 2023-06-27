import { MenuItem } from "../interfaces/menu.interface";
import { TopPageModel } from "../interfaces/page.interface";
import { API } from "./endpoints"

export const getMenu = async (category: number) => {
  try {
    const res = await fetch(API.topPage.find, {
      method: "POST",
      body: JSON.stringify({
        firstCategory: category
      }),
      headers: new Headers({ 'content-type': 'application/json' }),
      next: { revalidate: 10 }
    },
    )
    return res.json()
  }
  catch (e) {
    console.log(e, "error");

  }

}

export const getProductByAlias = async (alias: string): Promise<TopPageModel | null | undefined> => {
  try {
    const res = await fetch(API.topPage.byAlias + alias, {
      next: { revalidate: 10 }
    })
    if (!res.ok) {
      return null
    }
    return res.json()
  }
  catch (e) {
    console.log(e, "error");

  }

}

export const getProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(API.product.find, {
      method: "POST",
      body: JSON.stringify({
        category,
        limit:10
      }),
      headers: new Headers({ 'content-type': 'application/json' }),
      next: { revalidate: 10 }
    },
    )
    return res.json()
  }
  catch (e) {
    console.log(e, "error");

  }

}

