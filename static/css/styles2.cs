/* Profile Page Styles */
.profile-container {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Profile Header */
.profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
}

.profile-image-container {
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    margin-right: 2rem;
}

.profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.profile-image-placeholder {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #0066cc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
}

.profile-info {
    flex: 1;
}

.profile-name {
    font-size: 2rem;
    margin: 0 0 0.5rem;
}

.profile-title {
    font-size: 1.2rem;
    color: #555;
    margin: 0 0 0.5rem;
}

.profile-location {
    display: flex;
    align-items: center;
    color: #777;
    margin: 0 0 0.5rem;
}

.profile-short-bio {
    font-style: italic;
    color: #555;
    margin: 0.5rem 0;
}

/* Profile Sections */
.profile-section {
    margin-bottom: 2.5rem;
}

.section-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
    color: #333;
}

.empty-section {
    color: #888;
    font-style: italic;
}

/* Experience Items */
.experience-item, .education-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f5f5f5;
}

.experience-item:last-child, .education-item:last-child {
    border-bottom: none;
}

.experience-title, .education-degree {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
    color: #333;
}

.experience-date, .education-institution, .education-date {
    color: #777;
    font-size: 0.9rem;
    margin: 0 0 0.5rem;
}

.experience-description {
    line-height: 1.6;
}

/* Skills Section */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}

.skill-item {
    margin-bottom: 1rem;
}

.skill-name {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 500;
}

.skill-proficiency-container {
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.3rem;
}

.skill-proficiency-bar {
    height: 100%;
    background-color: #0066cc;
    border-radius: 4px;
}

.skill-level {
    font-size: 0.8rem;
    color: #777;
}

/* Profile Actions */
.profile-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
}

.edit-profile-btn {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    background-color: #0066cc;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s;
}

.edit-profile-btn:hover {
    background-color: #0055aa;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .profile-header {
        flex-direction: column;
        text-align: center;
    }
    
    .profile-image-container {
        margin-right: 0;
        margin-bottom: 1.5rem;
    }
    
    .skills-container {
        grid-template-columns: 1fr;
    }
}
