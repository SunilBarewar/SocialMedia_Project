import React from 'react'  
import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModel = ({modalOpened,setModalOpened}) => {
    const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      
      <form  className="infoForm">
          <h3>Your info</h3>

          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="Firstname"
            />
             <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
            />
          </div>


          <div>
            <input
              type="text"
              placeholder="Works at"
              className="infoInput"
              name="worksAT"
            />
          </div>


          <div>
            <input
              type="text"
              placeholder="lives in"
              className="infoInput"
              name="livesIn"
            />
             <input
              type="text"
              placeholder="Country"
              className="infoInput"
              name="country"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Relationship Status"
              className="infoInput"
            />
          </div>
          <div>
              Profile Image
              <input type="file" name='profileImg' />
              Cover Image
              <input type="file" name='coverImg' />
          </div>
          <button className='button infoButton'>Update</button>
      </form>
    </Modal>
  )
}

export default ProfileModel