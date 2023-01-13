import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import styles from "./App.module.css"
import { useSelector, useDispatch } from "react-redux"
// import { useState, useEffect } from "react"
import { addContact, removeContact } from "../redux/slices/contactsSlice"
import { setFilter, cleanFilter } from "../redux/slices/filterSlice"

export function App() {
	const dispatch = useDispatch()
	const filter = useSelector((state) => state.filter)
	const contacts = useSelector((state) => state.constats)

	// const [contacts, setContacts] = useState(() => {
	// 	return JSON.parse(localStorage.getItem("contacts")) ?? []
	// })
	// const [filter, setFilter] = useState("")

	// useEffect(() => {
	// 	localStorage.setItem("contacts", JSON.stringify(contacts))
	// }, [contacts])

	// const normalizeValue = (value) => value.toLowerCase().trim()

	// const searchContact = (e) => {
	// 	const { value } = e.target
	// 	setFilter(value)
	// }

	// const addNewContact = (newContact) => {
	// 	const exist = contacts.some((contact) => normalizeValue(contact.name) === normalizeValue(newContact.name))
	// 	if (exist) {
	// 		alert("Already in list")
	// 		return
	// 	}
	// 	setContacts((prevContacts) => [...prevContacts, newContact])
	// }

	// const filterContacts = () => {
	// 	return contacts.filter((contact) => normalizeValue(contact.name).includes(normalizeValue(filter)))
	// }

	// const deleteContact = (id) => {
	// 	const newContacts = contacts.filter((contact) => contact.id !== id)
	// 	setContacts(newContacts)
	// }

	// const filteredContacts = filterContacts()
	return (
		<div className={styles.container}>
			<ContactForm />
			<Filter />
			<ContactList />
		</div>
	)
}
