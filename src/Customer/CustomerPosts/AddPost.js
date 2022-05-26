import React, { useRef, useContext } from 'react';
import classes from './AddPost.module.css';
import AuthContext from '../../store/auth-context';

const AddPost = (props) => {
    const prefixRef = useRef('');
    const firstnameRef = useRef('');  
    const middlenameRef = useRef('');    
    const lastnameRef = useRef('');      
    //const contentRef = useRef('');
    const genderRef = useRef('');
    const mobileNoRef = useRef('');
    const primarylocationRef = useRef('');
    const address1Ref = useRef('');
    const address2Ref = useRef('');
    const suburbRef = useRef('');
    const cityRef = useRef('');
    const countryRef = useRef('');
    const postalcodeRef = useRef('');
    const authCtx = useContext(AuthContext);
    const email = authCtx.email;


    const submitHandler = (event) => {
        event.preventDefault();

        const post = {
            //id: Math.random().toString(),
            email: email,
            prefix: prefixRef.current.value,
            firstname: firstnameRef.current.value,    
            middlename: middlenameRef.current.value,   
            lastname: lastnameRef.current.value,   
            gender: genderRef.current.value,    
            mobile: mobileNoRef.current.value,   
            usertype: 'Customer',   
            primarylocation: primarylocationRef.current.value,  
            address1: address1Ref.current.value,   
            address2: address2Ref.current.value,   
            suburb: suburbRef.current.value,   
            city: cityRef.current.value,   
            country: countryRef.current.value,   
            postalcode: postalcodeRef.current.value,                               
            content: ''
        };

        props.onAddPost(post);
    }

    const genderList = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Others", value: "others" }
      ];

      const primaryLocationList = [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" }
      ];      
   
      const [value1, setPrimaryLocationValue] = React.useState('Yes');
      const [value, setGenderValue] = React.useState('male');
    
      const handleChange = (event) => {
        setGenderValue(event.target.value);
      };

      const handlePrimaryLocationChange = (event) => {
        setPrimaryLocationValue(event.target.value);
      };

    return (
        <form onSubmit={submitHandler}>

            <div className={classes.control}>
                <table>
                    <tr>
                        <td><label htmlFor='prefix'>Prefix: </label></td>
                        <td><input type='text' id='prefix' ref={prefixRef} size='10'/></td>
                        <td><label htmlFor='firstname'>Firstname: </label></td>
                        <td><input type='text' id='firstname' ref={firstnameRef} size='40'/></td>                        
                    </tr>
                    <tr></tr>
                    <tr>
                        <td><label htmlFor='middlename'>Middlename: </label></td>
                        <td><input type='text' id='middlename' ref={middlenameRef} /></td>
                        <td><label htmlFor='lastname'>Lastname: </label></td>
                        <td><input type='text' id='lastname' ref={lastnameRef} size='40'/> </td>
                    </tr>
                    <tr></tr>
                    <tr>
                        <td><label htmlFor='gender'>Gender: </label></td> 
                        <td>
                            <select value={value} onChange={handleChange} ref={genderRef} id='gender'>
                                {genderList.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>  
                        </td>
                   
                        <td><label htmlFor='mobile'>Mobile: </label></td>
                        <td><input type='text' id='mobile' ref={mobileNoRef} size='15'/> </td>
                    </tr>                    
                </table>                                          
            </div>
            <div className={classes.control}>
                <table>
                    <tr>
                        <td><label htmlFor='primarylocation'>Primary Location: </label></td> 
                        <td>
                            <select value={value1} onChange={handlePrimaryLocationChange} ref={primarylocationRef} id='primarylocation'>
                                {primaryLocationList.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>  
                        </td>                       
                    </tr>                     
                    <tr>
                        <td><label htmlFor='address1'>Address 1:</label></td>
                        <td><input type='text' id='address1' ref={address1Ref} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='address2'>Address 2:</label></td>
                        <td><input type='text' id='address2' ref={address2Ref} /></td>
                    </tr>    
                    <tr>
                        <td><label htmlFor='suburb'>Suburb:</label></td>
                        <td><input type='text' id='suburb' ref={suburbRef} /></td>
                    </tr>   
                    <tr>
                        <td><label htmlFor='city'>City:</label></td>
                        <td><input type='text' id='city' ref={cityRef} /></td>
                    </tr>  
                    <tr>
                        <td><label htmlFor='country'>Country:</label></td>
                        <td><input type='text' id='country' ref={countryRef} /></td>
                    </tr>  
                    <tr>
                        <td><label htmlFor='postalcode'>Postal Code:</label></td>
                        <td><input type='text' id='postalcode' ref={postalcodeRef} /></td>
                    </tr>                     
                </table>
                
                
            </div>
            <button className={classes.button}>Add Post</button>
        </form>
    );
};

export default AddPost;