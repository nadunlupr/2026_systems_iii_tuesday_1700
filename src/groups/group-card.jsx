function GroupCard({ id, name, isActive, onCardClick }) {
    return (
        <div className={isActive ? 'group-card-selected' : undefined}
            onClick={() => onCardClick(id)}>
            <h1>Group Name: {name}</h1>
            <p>Number of students: 16</p>
        </div>
    )
}

export default GroupCard;