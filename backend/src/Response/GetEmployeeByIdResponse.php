<?php


namespace App\Response;


class GetEmployeeByIdResponse
{
    public $id;
    public $fullName;
    public $position;
    public $language;
    public $image;
    public $experiances;
    public $details;
    public $isAvilable;
    public $facebook;
    public $twitter;
    public $linkedin;
    public $gmail;
//    public $birthDate;
//    public $joiningDate;
    public $skills;
    public $rating;
    public $word;
    public $yearsOfExperience;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }
  //  public $projects;


    /**
     * @return mixed
     */
    public function getFullName()
    {
        return $this->fullName;
    }

    /**
     * @param mixed $fullName
     */
    public function setFullName($fullName): void
    {
        $this->fullName = $fullName;
    }

    /**
     * @return mixed
     */
    public function getPosition()
    {
        return $this->position;
    }

    /**
     * @param mixed $position
     */
    public function setPosition($position): void
    {
        $this->position = $position;
    }

    /**
     * @return mixed
     */
    public function getLanguage()
    {
        return $this->language;
    }

    /**
     * @param mixed $language
     */
    public function setLanguage($language): void
    {
        $this->language = $language;
    }

    /**
     * @return mixed
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @param mixed $image
     */
    public function setImage($image): void
    {
        $this->image = $image;
    }

    /**
     * @return mixed
     */
    public function getExperiances()
    {
        return $this->experiances;
    }

    /**
     * @param mixed $experiances
     */
    public function setExperiances($experiances): void
    {
        $this->experiances = $experiances;
    }

    /**
     * @return mixed
     */
    public function getDetails()
    {
        return $this->details;
    }

    /**
     * @param mixed $details
     */
    public function setDetails($details): void
    {
        $this->details = $details;
    }

    /**
     * @return mixed
     */
    public function getIsAvilable()
    {
        return $this->isAvilable;
    }

    /**
     * @param mixed $isAvilable
     */
    public function setIsAvilable($isAvilable): void
    {
        $this->isAvilable = $isAvilable;
    }

    /**
     * @return mixed
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * @param mixed $facebook
     */
    public function setFacebook($facebook): void
    {
        $this->facebook = $facebook;
    }

    /**
     * @return mixed
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * @param mixed $twitter
     */
    public function setTwitter($twitter): void
    {
        $this->twitter = $twitter;
    }

    /**
     * @return mixed
     */
    public function getLinkedin()
    {
        return $this->linkedin;
    }

    /**
     * @param mixed $linkedin
     */
    public function setLinkedin($linkedin): void
    {
        $this->linkedin = $linkedin;
    }

    /**
     * @return mixed
     */
    public function getGmail()
    {
        return $this->gmail;
    }

    /**
     * @param mixed $gmail
     */
    public function setGmail($gmail): void
    {
        $this->gmail = $gmail;
    }

//    /**
//     * @return mixed
//     */
//    public function getBirthDate()
//    {
//        return $this->birthDate;
//    }
//
//    /**
//     * @param mixed $birthDate
//     */
//    public function setBirthDate($birthDate): void
//    {
//        $this->birthDate = $birthDate;
//    }
//
//    /**
//     * @return mixed
//     */
//    public function getJoiningDate()
//    {
//        return $this->joiningDate;
//    }
//
//    /**
//     * @param mixed $joiningDate
//     */
//    public function setJoiningDate($joiningDate): void
//    {
//        $this->joiningDate = $joiningDate;
//    }

    /**
     * @return mixed
     */
    public function getSkills()
    {
        return $this->skills;
    }

    /**
     * @param mixed $skills
     */
    public function setSkills($skills): void
    {
        $this->skills = $skills;
    }

    /**
     * @return mixed
     */
    public function getRating()
    {
        return $this->rating;
    }

    /**
     * @param mixed $rating
     */
    public function setRating($rating): void
    {
        $this->rating = $rating;
    }

    /**
     * @return mixed
     */
    public function getWord()
    {
        return $this->word;
    }

    /**
     * @param mixed $word
     */
    public function setWord($word): void
    {
        $this->word = $word;
    }

    /**
     * @return mixed
     */
    public function getYearsOfExperience()
    {
        return $this->yearsOfExperience;
    }

    /**
     * @param mixed $yearsOfExperience
     */
    public function setYearsOfExperience($yearsOfExperience): void
    {
        $this->yearsOfExperience = $yearsOfExperience;
    }

}