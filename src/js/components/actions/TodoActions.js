import dispatcher from "../../dispatcher";

export function createTodo(text) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id
	});
}

export function reloadTodos() {
	dispatcher.dispatch({type: "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
			{
				id: 123123,
				text: "Go Shopping asfd",
				complete: false
			},
			{
				id: 24121,
				text: "Pay Bills sdf",
				complete: false
			}
		]});
	}, 1000);
}