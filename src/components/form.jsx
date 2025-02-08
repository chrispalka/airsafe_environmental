import { useState } from 'preact/hooks';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../layout/index.js';
import InputMask from 'react-input-mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/styles/Form.module.css';
import axios from 'axios';

const api = import.meta.env.VITE_API_URL;

function Form({ isPageLoading }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(`${api}/formSubmit`, {
        data,
      })
      .then((response) => {
        if (response.data === 'success') {
          setIsLoading(false);
          setIsComplete(true);
          reset({
            phone: '',
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
          setTimeout(() => {
            setIsComplete(false);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section
      id='contact'
      className={
        isPageLoading
          ? [styles.sectionWrapper, styles.sectionWrapperFadeIn].join(' ')
          : styles.sectionWrapper
      }
    >
      <div className={styles.formContainer}>
        <div className={styles.formSubContainer}>
          {!isComplete ? (
            <>
              <h1 className={styles.heading}>Get in touch!</h1>
              <p className={styles.subHeading}>
                Fill out the form below, and we will get back to you as soon as
                possible!
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.styledForm}
              >
                <div className={styles.inputContainer}>
                  <input
                    className={`${styles.input} ${
                      errors.firstName ? styles.inputError : ''
                    }`}
                    type='text'
                    {...register('firstName', {
                      required: 'This field is required!',
                    })}
                    placeholder={errors.firstName?.message || 'First Name'}
                    disabled={isLoading}
                  />
                  <p></p>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    className={`${styles.input} ${
                      errors.lastName ? styles.inputError : ''
                    }`}
                    type='text'
                    {...register('lastName', {
                      required: 'This field is required!',
                    })}
                    placeholder={errors.lastName?.message || 'Last Name'}
                    disabled={isLoading}
                  />
                  <p></p>
                </div>
                <div className={styles.inputContainer}>
                  <input
                    className={`${styles.input} ${
                      errors.email ? styles.inputError : ''
                    }`}
                    {...register('email', {
                      required: 'This field is required!',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format',
                      },
                    })}
                    type='email'
                    placeholder={errors.email?.message || 'Email'}
                    disabled={isLoading}
                  />
                  <p></p>
                </div>
                <div
                  className={[styles.inputContainer, styles.telContainer].join(
                    ' '
                  )}
                >
                  <Controller
                    control={control}
                    name='phone'
                    defaultValue=''
                    render={({ field: { onChange, onBlur, ref } }) => (
                      <InputMask
                        mask='(999) 999-9999'
                        onBlur={onBlur}
                        onChange={onChange}
                        inputRef={ref}
                        inputMode='numeric'
                        placeholder='(555) 555-5555'
                        disabled={isLoading}
                        className={styles.input}
                      />
                    )}
                  />
                </div>
                <div
                  className={[styles.inputContainer, styles.telContainer].join(
                    ' '
                  )}
                >
                  <textarea
                    className={styles.input}
                    type='text'
                    {...register('message')}
                    rows='8'
                    placeholder='Questions, comments, concerns?'
                    disabled={isLoading}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <Button type='submit' className={styles.button}>
                    {isLoading ? (
                      <FontAwesomeIcon
                        className={'fa-spin'}
                        icon={faSpinner}
                        size='lg'
                      />
                    ) : (
                      <>Submit</>
                    )}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className={styles.thankYouContainer}>
              <h1 className={styles.heading}>Thank you!</h1>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faCheckCircle}
                size='lg'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Form;
