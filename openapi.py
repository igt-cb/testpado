import streamlit as st
import pandas as pd

logo_url = "https://sfdcboss.com/wp-content/uploads/2022/08/bossco-logo-1.png"

salesforce_css = """
<style>
body {
    color: #000000;
    background-color: #FFFFFF;
    margin: 20px;
}

.sidebar .sidebar-content {
    background-color: #00A1E0;
    color: #FFFFFF;
}

.sidebar .sidebar-content .Widget>label {
    color: #FFFFFF;
}

.stButton button {
    background-color: #0070D2;
    color: #FFFFFF;
}

.stTextInput input {
    background-color: #FFFFFF;
}

hr {
    border-color: #00A1E0;
}

h1 {
    color: #00A1E0;
}

h2 {
    color: #00A1E0;
}

h3 {
    color: #00A1E0;
}

h4 {
    color: #00A1E0;
}

h5 {
    color: #00A1E0;
}

h6 {
    color: #00A1E0;
}

a {
    color: #0070D2;
}

</style>
"""
st.markdown(salesforce_css, unsafe_allow_html=True)

def auto_documentation_generation_page():

    st.title("Auto Documentation Generation")
    st.write("Provide Metadata XML or Query for XML")

def home_page():
    st.title("Home Page")
    st.write("Welcome to the Salesforce App!")

def sfdx_page():
    st.title("SFDX")
    # Add your SFDX functionality here

def salesforce_tools_page():
    st.title("Salesforce Tools")
    # Add your Salesforce tools functionality here

def admin_tasks_page():
    st.title("Admin Tasks")
    # Add your admin tasks functionality here

def devops_page():
    st.title("DevOps")
    # Add your DevOps functionality here    

def render_menu(menu_items):

    for item in menu_items:
        if "submenu" in item:
            st.sidebar.markdown(f"## {item['label']}")
            submenu_options = [sub_item["label"] for sub_item in item["submenu"]]
            selected_submenu = st.sidebar.radio(f"### {item['label']}", submenu_options, key=item["label"])
            selected_submenu_index = submenu_options.index(selected_submenu)
            submenu_item = item["submenu"][selected_submenu_index]
            if "function" in submenu_item:
                submenu_function = submenu_item["function"]
                if callable(submenu_function):
                    submenu_function()
                else:
                    st.write(f"Function for '{submenu_item['label']}' is not callable.")
            else:
                st.write(f"No function specified for '{submenu_item['label']}'.")
        else:
            label = item['label']
            st.sidebar.radio(label, [label], key=label, on_change=render_home_page)

def render_home_page():
    st.title("Home Page")
    st.write("Welcome to the Salesforce App!")

def render_sfdx_page():
    st.title("SFDX")
    # Add your SFDX functionality here
    st.set_page_config(page_title='Salesforce Tool', page_icon='🏢')
    st.write("Welcome to the Home page!")
    st.header('New App with tons of components')
    st.title('App Title')

    # Grid layout
    col1, col2 = st.columns(2)
    with col1:
        st.write("This is column 1")
    with col2:
        st.write("This is column 2")

    # Tabs
    tab1, tab2 = st.tabs(["Tab 1", "Tab 2"])
    with tab1:
        import streamlit as st

# Set page title and favicon


    # Set custom CSS for tech theme
    st.markdown("""
        <style>
        .stRadio span {
            font-family: 'Courier New', monospace !important;
        }
        
        .stButton {
            background-color: #4CAF50 !important;
            color: white !important;
            border: none !important;
            padding: 10px 20px !important;
            text-align: center !important;
            text-decoration: none !important;
            display: inline-block !important;
            font-size: 16px !important;
            margin: 4px 2px !important;
            cursor: pointer !important;
            border-radius: 5px !important;
            transition-duration: 0.4s !important;
        }
        
        .stButton:hover {
            background-color: #45a049 !important;
            color: white !important;
        }
        
        .stTextArea {
            font-family: 'Courier New', monospace !important;
        }
        
        .stTextEditor {
            font-family: 'Courier New', monospace !important;
            background-color: black !important;
            color: #00FF41 !important;
            border-radius: 5px !important;
            border: 1px solid #00FF41 !important;
            padding: 10px !important;
        }
        </style>
        """, unsafe_allow_html=True)

    # Header
    st.title("Salesforce Tool")
    st.subheader("Document and Integrate Salesforce Metadata")

    # Select SFDX project type - local or remote
    project_type = st.radio("Select SFDX Project Type", ["Local Project", "Remote Project"])

    if project_type == "Local Project":
        # Select the metadata to document
        metadata = st.multiselect("Select Metadata to Document", ["ApexClass", "CustomObject", "ApexTrigger", "LightningComponentBundle"])
    else:
        # Enter the URL for the remote project
        project_url = st.text_input("Enter Project URL")

    # Code editor for selected metadata or manual entry
    code_editor_value = ""
    if metadata:
        code_editor_value = "code editor value for the selected metadata"
    code_editor = st.text_area("Code Editor", value=code_editor_value, height=200)

    # Integration questions and results in text editor
    if st.button("Integrate"):
        # Questions related to the selected metadata
        integration_questions = ["Integration Question 1", "Integration Question 2", "Integration Question 3"]
        responses = []
        
        for question in integration_questions:
            response = st.text_input(question)
            responses.append(response)
        
        # Display the results in a text editor
        result = "Integration Result based on the responses"
        st.text_editor(result)

    # Buttons for related actions
    if st.button("Action 1"):
        st.write("Perform action 1")
    if st.button("Action 2"):
        st.write("Perform action 2")

    # OpenAI API configuration inputs
    api_key = st.text_input("OpenAI API Key")
    model_name = st.selectbox("Model Name", ["Model 1", "Model 2", "Model 3"])

    if st.button("Configure"):
        st.write("Configuring OpenAI API with the provided inputs")
    with tab2:
        st.write("This is tab 2")

        # Sidebar widgets
        with st.sidebar:
            selected_option = st.radio("Select one:", [1, 2])
            if selected_option == 1:
                st.write("Option 1 selected")
            elif selected_option == 2:
                st.write("Option 2 selected")

        # Display data
        my_dataframe = generate_dataframe()
        st.dataframe(my_dataframe)
        st.table(my_dataframe.iloc[0:10])
        st.json({'foo': 'bar', 'fu': 'ba'})
        st.metric("My metric", 42, 2)

        # Interactive widgets
        if st.button("Click me"):
            st.write("Button clicked")
        edited_data = st.data_editor("Edit data", my_dataframe)
        st.checkbox("I agree")
        selected_radio = st.radio("Pick one", ['cats', 'dogs'])
        selected_option = st.selectbox("Pick one", ['cats', 'dogs'])
        selected_options = st.multiselect("Buy", ['milk', 'apples', 'potatoes'])
        selected_number = st.slider("Pick a number", 0, 100)
        selected_size = st.select_slider("Pick a size", ['S', 'M', 'L'])
        first_name = st.text_input("First name")
        picked_number = st.number_input("Pick a number", 0, 10)
        text_to_translate = st.text_area("Text to translate")
        birthday = st.date_input("Your birthday")
        meeting_time = st.time_input("Meeting time")
        uploaded_file = st.file_uploader("Upload a CSV")
        if uploaded_file is not None:
            st.write("File uploaded:", uploaded_file.name)
        st.download_button("Download file", data)
        st.camera_input("Take a picture")
        selected_color = st.color_picker("Pick a color")
        for i in range(int(st.number_input("Num:"))):
            foo()
        if st.sidebar.selectbox("I:", ['f']) == 'f':
            b()
        my_slider_val = st.slider("Quinn Mallory", 1, 88)
        st.write(slider_val)

        # Chat-based apps
        with st.chat_message("user"):
            st.write("Hello 👋")
        st.line_chart(np.random.randn(30, 3))
        user_message = st.chat_input("Say something")
        if user_message:
            st.write(f"You said: {user_message}")

        # Mutate data
        element = st.dataframe(my_dataframe)
        element.add_rows(new_data)

        # Display code
        with st.echo():
            st.write('Code will be executed and printed')

        # Placeholders, help, and options
        element = st.empty()
        element.line_chart(...)
        element.text_input(...)
        elements = st.container()
        elements.line_chart(...)
        st.write("Hello")
        elements.text_input(...)
        st.help(pandas.DataFrame)
        st.get_option(key)
        st.set_option(key, value)
    
        st.experimental_get_query_params()
        st.experimental_set_query_params(**params)


        # Optimize performance
        @st.cache_data(...)
        def foo(bar):
            # Do something expensive and return data
            return data
        d1 = foo(ref1)
        d2 = foo(ref1)
        d3 = foo(ref2)
        foo.clear()
        st.cache_data.clear()

        @st.cache_resource(...)
        def foo(bar):
            # Create and return a non-data object
            return session
        s1 = foo(ref1)
        s2 = foo(ref1)
        s3 = foo(ref2)
        foo.clear()
        st.cache_resource.clear()

        @st.cache(...)
        def foo(bar):
            # Do something expensive in here...
            return data
        d1 = foo(ref1)
        d2 = foo(ref1)
        d3 = foo(ref2)

        # Display progress and status
        with st.spinner(text='In progress'):
            time.sleep(3)
        st.success('Done')

        bar = st.progress(50)
        time.sleep(3)
        bar.progress(100)

        st.balloons()
        st.snow()
        st.toast('Warming up...')
        st.error('Error message')
        st.warning('Warning message')
        st.info('Info message')
        st.success('Success message')
        st.exception(e)

        # Personalize apps for users
        if st.user.email == 'jane@email.com':
            display_jane_content()
        elif st.user.email == 'adam@foocorp.io':
            display_adam_content()
        else:
            st.write("Please contact us to get access!")

def generate_dataframe():
    # Generate a sample dataframe
    df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
    return df
 
def render_create_retrieve_metadata_page():
    st.write("This is the Create/Retrieve Metadata page.")

def render_deploy_metadata_page():
    st.write("This is the Deploy Metadata page.")

def render_metadata_diff_checker_page():
    st.write("This is the Metadata Diff Checker page.")

def render_org_comparisons_page():
    st.write("This is the Org Comparisons page.")

def render_org_snapshot_page():
    st.write("This is the Org Snapshot page.")
 
def render_workbench_page():
    st.write("This is the Workbench page.")

def render_dev_console_page():
    st.write("This is the Developer Console page.")

def render_data_loader_page():
    st.write("This is the Data Loader page.")
 
def render_user_management_page():
    st.write("This is the User Management page.")

def render_profile_management_page():
    st.write("This is the Profile Management page.")

def render_permission_sets_page():
    st.write("This is the Permission Sets page.")
 
def render_git_integration_page():
    st.write("This is the Git Integration page.")

def render_version_control_page():
    st.write("This is the Version Control page.")

def render_ci_cd_page():
    st.write("This is the CI/CD page.")
 
def render_provide_metadata_xml_page():
    st.write("This is the Provide Metadata XML page.")

def render_query_xml_page():
    st.write("This is the Query for XML page.")

def render_menu(menu_items):
    for item in menu_items:
        if "submenu" in item:
            st.sidebar.markdown(f"## {item['label']}")
            submenu_options = [sub_item["label"] for sub_item in item["submenu"]]
            selected_submenu = st.sidebar.radio(f"### {item['label']}", submenu_options, key=item["label"])
            selected_submenu_index = submenu_options.index(selected_submenu)
            submenu_item = item["submenu"][selected_submenu_index]
            if "function" in submenu_item:
                submenu_function = submenu_item["function"]
                if callable(submenu_function):
                    submenu_function()
                else:
                    st.write(f"Function for '{submenu_item['label']}' is not callable.")
            else:
                st.write(f"No function specified for '{submenu_item['label']}'.")
        else:
            label = item['label']
            st.sidebar.radio(label, [label], key=label, on_change=render_home_page)  
 
menu_structure = [
    {
        "label": "Home 🏠",
        "function": render_home_page()

    },
    {
        "label": "SFDX 🚀",
        "submenu": [
            {
                "label": "Create/Retrieve Metadata",
                "url": "/sfdx-metadata"
            },
            {
                "label": "Deploy Metadata",
                "url": "/sfdx-deploy"
            },
            {
                "label": "Metadata Diff Checker",
                "url": "/sfdx-diff"
            },
            {
                "label": "Org Comparisons",
                "url": "/sfdx-org-comparisons"
            },
            {
                "label": "Org Snapshot",
                "url": "/sfdx-org-snapshot"
            }
        ]
    },
    {
        "label": "Salesforce Tools 🛠️",
        "submenu": [
            {
                "label": "Workbench",
                "url": "/salesforce-workbench"
            },
            {
                "label": "Developer Console",
                "url": "/salesforce-dev-console"
            },
            {
                "label": "Data Loader",
                "url": "/salesforce-dataloader"
            },
            # Add more submenu items as needed
        ]
    },
    {
        "label": "Admin Tasks 👩‍💼",
        "submenu": [
            {
                "label": "User Management",
                "url": "/admin-user-management"
            },
            {
                "label": "Profile Management",
                "url": "/admin-profile-management"
            },
            {
                "label": "Permission Sets",
                "url": "/admin-permission-sets"
            },
            # Add more submenu items as needed
        ]
    },
    {
        "label": "DevOps",
        "submenu": [
            {
                "label": "Git Integration",
                "url": "/devops-git-integration"
            },
            {
                "label": "Version Control",
                "url": "/devops-version-control"
            },
            {
                "label": "CI/CD (Continuous Integration/Continuous Deployment)",
                "url": "/devops-ci-cd"
            },
            # Add more submenu items as needed
        ]
    },
    {
        "label": "Auto Documentation Generation",
        "submenu": [
            {
                "label": "Provide Metadata XML",
                "url": "/auto-docs-provide-xml"
            },
            {
                "label": "Query for XML",
                "url": "/auto-docs-query-xml"
            },
            # Add more submenu items as needed
        ]
    }
]
 
render_menu(menu_structure)
 