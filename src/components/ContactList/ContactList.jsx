import styles from "./ContactList.module.css"
import { useSelector, useDispatch } from "react-redux"
import { removeContact } from "../../redux/slices/contactsSlice"

export default function ContactList() {
	const contacts = useSelector((state) => state.contacts)
	const filter = useSelector((state) => state.filter)
	const dispatch = useDispatch()
	const deleteContact = (id) => {
		return () => {
			dispatch(removeContact(id))
		}
	}

	const normalizeValue = (value) => value.toLowerCase().trim()
	const visibleContacts = contacts.filter((contact) => normalizeValue(contact.name).includes(normalizeValue(filter)))
	return (
		<>
			<ul className={styles.list}>
				{visibleContacts.map(({ id, name, number }) => (
					<li className={styles.item} key={id}>
						{name}, {number}
						<button className={styles.button} onClick={deleteContact(id)} type="button">
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	)
}
