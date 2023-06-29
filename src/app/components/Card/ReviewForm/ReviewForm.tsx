"use client"
import classes from './ReviewForm.module.scss'
import cn from 'classnames'
import { IForm, IReviewForm } from './ReviewFormTypes'
import { Buttons, Input, Rating, Textarea } from '../..'
import CloseIcon from '../../../assets/images/close.svg'
import { useForm, Controller, } from 'react-hook-form'
import { sendReview } from '@/app/api/REST'
import { useState } from 'react'

const ReviewForm: React.FC<IReviewForm> = ({ productId, isOpened, className, ...props }) => {
  const { handleSubmit, register, control, formState: { errors } } = useForm<IForm>()
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const submitHandler = async (data: IForm) => {
    const res = await sendReview(data, productId)

    if (res.message) {
      setIsSuccess(true)
      setError("")
    } else {
      setError("Something gonna wrong try to reload the page")
    }

  }

  return (
    <form
      className={cn(classes.reviewForm, className)}
      onSubmit={handleSubmit(submitHandler)}
      {...props}
    >
      <Input
        placeholder='Name'
        tabIndex={0}
        {...register("name", { required: { value: true, message: "Name is required" } })}
        error={errors.name}
      />
      <Input
        placeholder='Заголовок отзыва'
        className={classes.title}
        tabIndex={isOpened ? 0 : -1}
        {...register("title", { required: { value: true, message: "Title is required" } })}
        error={errors.title}
      />

      <div className={classes.rating}>
        <span>Evaluation:</span>
        <Controller
          control={control}
          name="rating"
          rules={{ required: { value: true, message: "Rating is required" } }}
          render={({ field }) => (
            <Rating
              isEditable
              rating={field.value}
              error={errors.rating}
              setRating={field.onChange}
              className={classes.formRating}
            />
          )}
        />

      </div>

      <Textarea
        placeholder='Текст отзыва'
        className={classes.description}
        tabIndex={isOpened ? 0 : -1}
        {...register("description", { required: { value: true, message: "Description is required" } })}
        error={errors.description}
        aria-label='Текст отзыва'
      />

      <div className={classes.submit}>
        <Buttons
          appearance="primary"
          tabIndex={isOpened ? 0 : -1}
          onAction={() => { }}
          className={cn(classes.btn)}
        >Send</Buttons>
        <span className={classes.info}>* Перед публикацией отзыв пройдет предварительную    модерацию и проверку</span>
      </div>

      {isSuccess ? <div className={cn(classes.success, classes.panel)} role="alert">
        <div className={classes.successTitle}>Your review sent</div>
        <div>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <button
          className={classes.close}
          aria-label="Close"
          onClick={() => setIsSuccess(false)}
        >
          <CloseIcon />
        </button>
      </div> : ""}

      {error ?
        <div className={cn(classes.error, classes.panel)} role="alert">
          {error}
          <button
            onClick={() => setError("")}
            className={classes.close}
            aria-label="Закрыть оповещение"
          >
            <CloseIcon />
          </button>
        </div> : ""}
    </form>

  )
}

export default ReviewForm