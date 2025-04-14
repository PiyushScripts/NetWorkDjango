document.addEventListener('DOMContentLoaded', function() {
    // Toggle dark mode functionality
    const darkModeToggle = document.createElement('div');
    darkModeToggle.classList.add('toggle-theme');
    darkModeToggle.innerHTML = `
        <input type="checkbox" id="darkMode">
        <label for="darkMode">Toggle dark mode</label>
    `;
    document.body.appendChild(darkModeToggle);

    const darkModeCheckbox = document.getElementById('darkMode');
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeCheckbox.checked = true;
    }
    
    // Toggle dark mode
    darkModeCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Experience formset handling
    const experienceContainer = document.querySelector('.form-section:nth-of-type(2)');
    const addExperienceBtn = document.querySelector('.add-experience');
    const experienceForms = document.querySelectorAll('.experience-form');
    
    // Count total forms to maintain Django formset management
    let experienceFormCount = experienceForms.length;
    
    // Add new experience form
    addExperienceBtn.addEventListener('click', function() {
        // Get the template form (the last one)
        const templateForm = experienceForms[experienceForms.length - 1];
        const newForm = templateForm.cloneNode(true);
        
        // Update all the IDs and names in the new form to use the new index
        updateFormIndexes(newForm, 'experience', experienceFormCount);
        
        // Clear all inputs in the new form
        newForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.value = '';
            if (input.type === 'checkbox') {
                input.checked = false;
            }
        });
        
        // Add the new form before the add button
        addExperienceBtn.before(newForm);
        
        // Increment the form count and update the management form total
        experienceFormCount++;
        updateManagementForm('experience', experienceFormCount);
        
        // Add event listener to the new remove button
        newForm.querySelector('.remove-experience').addEventListener('click', function() {
            removeForm(this, 'experience');
        });
    });
    
    // Add event listeners to existing remove buttons
    document.querySelectorAll('.remove-experience').forEach(btn => {
        btn.addEventListener('click', function() {
            removeForm(this, 'experience');
        });
    });
    
    // Education formset handling
    const educationContainer = document.querySelector('.form-section:nth-of-type(3)');
    const addEducationBtn = document.querySelector('.add-education');
    const educationForms = document.querySelectorAll('.education-form');
    
    let educationFormCount = educationForms.length;
    
    addEducationBtn.addEventListener('click', function() {
        const templateForm = educationForms[educationForms.length - 1];
        const newForm = templateForm.cloneNode(true);
        
        updateFormIndexes(newForm, 'education', educationFormCount);
        
        newForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.value = '';
        });
        
        addEducationBtn.before(newForm);
        
        educationFormCount++;
        updateManagementForm('education', educationFormCount);
        
        newForm.querySelector('.remove-education').addEventListener('click', function() {
            removeForm(this, 'education');
        });
    });
    
    document.querySelectorAll('.remove-education').forEach(btn => {
        btn.addEventListener('click', function() {
            removeForm(this, 'education');
        });
    });
    
    // Skills formset handling
    const skillContainer = document.querySelector('.form-section:nth-of-type(4)');
    const addSkillBtn = document.querySelector('.add-skill');
    const skillForms = document.querySelectorAll('.skill-form');
    
    let skillFormCount = skillForms.length;
    
    addSkillBtn.addEventListener('click', function() {
        const templateForm = skillForms[skillForms.length - 1];
        const newForm = templateForm.cloneNode(true);
        
        updateFormIndexes(newForm, 'skill', skillFormCount);
        
        newForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.value = '';
        });
        
        addSkillBtn.before(newForm);
        
        skillFormCount++;
        updateManagementForm('skill', skillFormCount);
        
        newForm.querySelector('.remove-skill').addEventListener('click', function() {
            removeForm(this, 'skill');
        });
    });
    
    document.querySelectorAll('.remove-skill').forEach(btn => {
        btn.addEventListener('click', function() {
            removeForm(this, 'skill');
        });
    });
    
    // Helper function to update form indexes
    function updateFormIndexes(form, prefix, newIndex) {
        const regex = new RegExp(`${prefix}_formset-(\\d+)-`);
        form.querySelectorAll('input, textarea, select, label').forEach(element => {
            if (element.name) {
                element.name = element.name.replace(regex, `${prefix}_formset-${newIndex}-`);
            }
            if (element.id) {
                element.id = element.id.replace(regex, `${prefix}_formset-${newIndex}-`);
            }
            if (element.htmlFor) {
                element.htmlFor = element.htmlFor.replace(regex, `${prefix}_formset-${newIndex}-`);
            }
        });
    }
    
    // Helper function to update the management form
    function updateManagementForm(prefix, count) {
        const totalFormsInput = document.querySelector(`#id_${prefix}_formset-TOTAL_FORMS`);
        if (totalFormsInput) {
            totalFormsInput.value = count;
        }
    }
    
    // Helper function to remove a form
    function removeForm(btn, prefix) {
        const form = btn.closest(`.${prefix}-form`);
        const container = form.parentElement;
        
        // Only allow removal if there's more than one form
        const forms = container.querySelectorAll(`.${prefix}-form`);
        if (forms.length > 1) {
            container.removeChild(form);
            
            // Update the management form count
            const totalFormsInput = document.querySelector(`#id_${prefix}_formset-TOTAL_FORMS`);
            if (totalFormsInput) {
                totalFormsInput.value = parseInt(totalFormsInput.value) - 1;
            }
        } else {
            // If it's the last form, just clear the inputs instead of removing
            form.querySelectorAll('input, textarea, select').forEach(input => {
                input.value = '';
                if (input.type === 'checkbox') {
                    input.checked = false;
                }
            });
        }
    }
    
    // Handle currently working checkbox
    document.addEventListener('change', (e) => {
        if (e.target && e.target.id.includes('currently_working')) {
            const endDateInput = e.target.closest('.experience-form').querySelector('input[id*="end_date"]');
            endDateInput.disabled = e.target.checked;
            if (e.target.checked) {
                endDateInput.value = '';
            }
        }
    });
});