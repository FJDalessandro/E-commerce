const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(token: string, products: number[]) {
    try {
        const response = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify({ products }),
        });
        if (response.ok) {
            alert("Compra relaizada con exito");
            return response.json();
        } else {
            alert("Error al realizar la compra");
            throw new Error("Fallo el servidor al realizar la compra");
        }
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function getOrders(token: string) {
    try {
        const response = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": token,
            },
        });
        return response.json();
    } catch (error: any) {
        throw new Error(error);
    }
}
