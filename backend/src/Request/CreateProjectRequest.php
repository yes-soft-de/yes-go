<?php


namespace App\Request;


class CreateProjectRequest
{
    public $name;
    public $link;
    public $publishedDate;
    public $workingPeriod;
    public $details;

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getLink()
    {
        return $this->link;
    }

    /**
     * @param mixed $link
     */
    public function setLink($link): void
    {
        $this->link = $link;
    }

    /**
     * @return mixed
     */
    public function getPublishedDate()
    {
        return $this->publishedDate;
    }

    /**
     * @param mixed $publishedDate
     */
    public function setPublishedDate($publishedDate): void
    {
        $this->publishedDate = $publishedDate;
    }

    /**
     * @return mixed
     */
    public function getWorkingPeriod()
    {
        return $this->workingPeriod;
    }

    /**
     * @param mixed $workingPeriod
     */
    public function setWorkingPeriod($workingPeriod): void
    {
        $this->workingPeriod = $workingPeriod;
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


}